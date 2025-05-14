// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CommitFileResponseBodyDentry } from "./CommitFileResponseBodyDentry";


export class CommitFileResponseBody extends $dara.Model {
  dentry?: CommitFileResponseBodyDentry;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      dentry: 'dentry',
      requestId: 'requestId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentry: CommitFileResponseBodyDentry,
      requestId: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(this.dentry && typeof (this.dentry as any).validate === 'function') {
      (this.dentry as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

