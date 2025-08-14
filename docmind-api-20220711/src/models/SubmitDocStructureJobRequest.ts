// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDocStructureJobRequest extends $dara.Model {
  allowPptFormat?: boolean;
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
  fileUrl?: string;
  formulaEnhancement?: boolean;
  ossBucket?: string;
  ossEndpoint?: string;
  pageIndex?: string;
  structureType?: string;
  static names(): { [key: string]: string } {
    return {
      allowPptFormat: 'AllowPptFormat',
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrl: 'FileUrl',
      formulaEnhancement: 'FormulaEnhancement',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      pageIndex: 'PageIndex',
      structureType: 'StructureType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowPptFormat: 'boolean',
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrl: 'string',
      formulaEnhancement: 'boolean',
      ossBucket: 'string',
      ossEndpoint: 'string',
      pageIndex: 'string',
      structureType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

