// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class SubmitConvertPdfToExcelJobAdvanceRequest extends $dara.Model {
  enableEventCallback?: boolean;
  /**
   * @example
   * convertPdfToExcel.pdf
   */
  fileName?: string;
  /**
   * @example
   * https://gw.alipayobjects.com/os/basement_prod/598b9edf-5287-4065-9e36-464305c60698.pdf
   */
  fileUrlObject?: Readable;
  forceExportInnerImage?: boolean;
  forceMergeExcel?: boolean;
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      enableEventCallback: 'EnableEventCallback',
      fileName: 'FileName',
      fileUrlObject: 'FileUrl',
      forceExportInnerImage: 'ForceExportInnerImage',
      forceMergeExcel: 'ForceMergeExcel',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableEventCallback: 'boolean',
      fileName: 'string',
      fileUrlObject: 'Readable',
      forceExportInnerImage: 'boolean',
      forceMergeExcel: 'boolean',
      ossBucket: 'string',
      ossEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

