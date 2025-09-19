// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVersionConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that uses Security Center.
   * 
   * >  You can call the [GetUser](https://help.aliyun.com/document_detail/28681.html) operation to query the IDs of Alibaba Cloud accounts.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.0.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceDirectoryAccountId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

