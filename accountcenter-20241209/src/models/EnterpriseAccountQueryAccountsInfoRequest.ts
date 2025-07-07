// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseAccountQueryAccountsInfoRequest extends $dara.Model {
  encryptTicket?: string;
  maxResults?: number;
  nextToken?: string;
  orientedEcId?: string;
  orientedLeId?: string;
  orientedNbId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pksJson?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  showCompleteInfo?: boolean;
  static names(): { [key: string]: string } {
    return {
      encryptTicket: 'EncryptTicket',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orientedEcId: 'OrientedEcId',
      orientedLeId: 'OrientedLeId',
      orientedNbId: 'OrientedNbId',
      pksJson: 'PksJson',
      requestId: 'RequestId',
      showCompleteInfo: 'ShowCompleteInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptTicket: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orientedEcId: 'string',
      orientedLeId: 'string',
      orientedNbId: 'string',
      pksJson: 'string',
      requestId: 'string',
      showCompleteInfo: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

