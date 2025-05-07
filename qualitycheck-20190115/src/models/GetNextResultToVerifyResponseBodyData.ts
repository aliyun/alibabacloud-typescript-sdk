// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetNextResultToVerifyResponseBodyDataDialogues } from "./GetNextResultToVerifyResponseBodyDataDialogues";


export class GetNextResultToVerifyResponseBodyData extends $dara.Model {
  /**
   * @example
   * http
   */
  audioScheme?: string;
  /**
   * @example
   * sca-bucket.oss-cn-hangzhou.aliyuncs.com/upload_1173636551461420/dateset_1584674455133_SzC/%E4%BA%BA%E5%B7%A5%E6%A0%A1%E9%AA%8C%E6%B5%8B%E8%AF%95-%E6%9F%A5%E5%8C%97%E4%BA%AC%E5%A4%A9%E6%B0%94.wav?Expires=1584847372&amp;OSSAccessKeyId=*****&amp;Signature=HccAKnLOJwoYvzE*********
   */
  audioURL?: string;
  dialogues?: GetNextResultToVerifyResponseBodyDataDialogues;
  /**
   * @example
   * 23421
   */
  duration?: number;
  /**
   * @example
   * e790e6c919d84b82b64ee*****
   */
  fileId?: string;
  /**
   * @example
   * xxx.wav
   */
  fileName?: string;
  /**
   * @example
   * 23
   */
  incorrectWords?: number;
  /**
   * @example
   * 2
   */
  index?: number;
  /**
   * @example
   * 0.97079998
   */
  precision?: number;
  /**
   * @example
   * 3
   */
  status?: number;
  /**
   * @example
   * 3
   */
  totalCount?: number;
  /**
   * @example
   * 2020-03-20T11:26Z
   */
  updateTime?: string;
  /**
   * @example
   * true
   */
  verified?: boolean;
  /**
   * @example
   * 2
   */
  verifiedCount?: number;
  static names(): { [key: string]: string } {
    return {
      audioScheme: 'AudioScheme',
      audioURL: 'AudioURL',
      dialogues: 'Dialogues',
      duration: 'Duration',
      fileId: 'FileId',
      fileName: 'FileName',
      incorrectWords: 'IncorrectWords',
      index: 'Index',
      precision: 'Precision',
      status: 'Status',
      totalCount: 'TotalCount',
      updateTime: 'UpdateTime',
      verified: 'Verified',
      verifiedCount: 'VerifiedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioScheme: 'string',
      audioURL: 'string',
      dialogues: GetNextResultToVerifyResponseBodyDataDialogues,
      duration: 'number',
      fileId: 'string',
      fileName: 'string',
      incorrectWords: 'number',
      index: 'number',
      precision: 'number',
      status: 'number',
      totalCount: 'number',
      updateTime: 'string',
      verified: 'boolean',
      verifiedCount: 'number',
    };
  }

  validate() {
    if(this.dialogues && typeof (this.dialogues as any).validate === 'function') {
      (this.dialogues as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

