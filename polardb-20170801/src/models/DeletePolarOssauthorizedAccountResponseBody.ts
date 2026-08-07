// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePolarOSSAuthorizedAccountResponseBody extends $dara.Model {
  /**
   * @example
   * arn:sts::123456:assumed-role/myrole/*
   */
  authorizedUserArnIds?: string;
  /**
   * @example
   * 1234567890,9876543210
   */
  authorizedUserIds?: string;
  /**
   * @example
   * pfs-xxxxxxxxxxxxxxxxx
   */
  pfsInstanceId?: string;
  /**
   * @example
   * F45FFACC-xxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizedUserArnIds: 'AuthorizedUserArnIds',
      authorizedUserIds: 'AuthorizedUserIds',
      pfsInstanceId: 'PfsInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedUserArnIds: 'string',
      authorizedUserIds: 'string',
      pfsInstanceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

