// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class CreateTextFileAdvanceRequest extends $dara.Model {
  /**
   * @example
   * e9a93201-7e96-4dc1-9678-2832fc132d08
   */
  clientToken?: string;
  contractId?: string;
  /**
   * @example
   * 1714476549
   */
  createTime?: string;
  textFileName?: string;
  textFileUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      contractId: 'ContractId',
      createTime: 'CreateTime',
      textFileName: 'TextFileName',
      textFileUrlObject: 'TextFileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      contractId: 'string',
      createTime: 'string',
      textFileName: 'string',
      textFileUrlObject: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

