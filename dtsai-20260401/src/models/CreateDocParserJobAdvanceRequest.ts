// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class CreateDocParserJobAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  fileFormat?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileUrlObject?: Readable;
  /**
   * @remarks
   * This parameter is required.
   */
  outputFormat?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileFormat: 'FileFormat',
      fileName: 'FileName',
      fileUrlObject: 'FileUrl',
      outputFormat: 'OutputFormat',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileFormat: 'string',
      fileName: 'string',
      fileUrlObject: 'Readable',
      outputFormat: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

