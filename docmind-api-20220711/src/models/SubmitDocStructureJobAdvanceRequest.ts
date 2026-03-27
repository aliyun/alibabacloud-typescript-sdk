// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class SubmitDocStructureJobAdvanceRequest extends $dara.Model {
  allowPptFormat?: boolean;
  enableEventCallback?: boolean;
  /**
   * @example
   * docStructure.pdf
   */
  fileName?: string;
  /**
   * @example
   * pdf
   */
  fileNameExtension?: string;
  /**
   * @example
   * https://gw.alipayobjects.com/os/basement_prod/598b9edf-5287-4065-9e36-464305c60698.pdf
   */
  fileUrlObject?: Readable;
  formulaEnhancement?: boolean;
  ossBucket?: string;
  ossEndpoint?: string;
  outputFormat?: string[];
  pageIndex?: string;
  structureType?: string;
  static names(): { [key: string]: string } {
    return {
      allowPptFormat: 'AllowPptFormat',
      enableEventCallback: 'EnableEventCallback',
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrlObject: 'FileUrl',
      formulaEnhancement: 'FormulaEnhancement',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      outputFormat: 'OutputFormat',
      pageIndex: 'PageIndex',
      structureType: 'StructureType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowPptFormat: 'boolean',
      enableEventCallback: 'boolean',
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrlObject: 'Readable',
      formulaEnhancement: 'boolean',
      ossBucket: 'string',
      ossEndpoint: 'string',
      outputFormat: { 'type': 'array', 'itemType': 'string' },
      pageIndex: 'string',
      structureType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.outputFormat)) {
      $dara.Model.validateArray(this.outputFormat);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

