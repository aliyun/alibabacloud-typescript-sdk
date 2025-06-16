// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FileUploadRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0r2LSuIsHlxEoGZcnGe34U1njBOR83Q4HNSvMDGrDPK5J71VjcGdRIWz2x3+tFxvQaduwHB46Z9K
   * dbIoDN8xPQ5PWlky8rKOPmAqSZfIRyPmAwvPvTJFwr8bRgHPPaq2VO8kHJ6jFIpJJ5I7Zqd1BjGS
   * SR/kULQZHsDDd2zgA9RRTsEQF2OSxFFFx2P/2Q==
   */
  fileContent?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 496***2617111
   */
  orderNum?: number;
  static names(): { [key: string]: string } {
    return {
      fileContent: 'file_content',
      orderNum: 'order_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileContent: 'string',
      orderNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

