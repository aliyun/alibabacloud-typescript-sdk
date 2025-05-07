// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeADInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The DNS information about the AD domain.
   * 
   * @example
   * 100.100.XX.XX
   */
  ADDNS?: string;
  /**
   * @remarks
   * The service IP address of the AD domain.
   * 
   * @example
   * 192.168.XX.XX
   */
  ADServerIpAddress?: string;
  /**
   * @remarks
   * The status of the AD domain. Valid values:
   * 
   * *   **-1**: The instance is being added to the AD domain.
   * *   **0**: The instance fails to be added to the AD domain.
   * *   **1**: The instance is added to the AD domain.
   * 
   * @example
   * 1
   */
  ADStatus?: string;
  /**
   * @remarks
   * The cause of the error.
   * 
   * @example
   * XXXX
   */
  abnormalReason?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The username of the AD domain.
   * 
   * @example
   * test_01
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      ADDNS: 'ADDNS',
      ADServerIpAddress: 'ADServerIpAddress',
      ADStatus: 'ADStatus',
      abnormalReason: 'AbnormalReason',
      requestId: 'RequestId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ADDNS: 'string',
      ADServerIpAddress: 'string',
      ADStatus: 'string',
      abnormalReason: 'string',
      requestId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

