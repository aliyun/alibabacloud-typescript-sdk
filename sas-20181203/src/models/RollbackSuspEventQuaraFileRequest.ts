// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RollbackSuspEventQuaraFileRequest extends $dara.Model {
  /**
   * @remarks
   * The source of the request. Set the value to sas.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The ID of the quarantined file. You can call [DescribeSuspEventQuaraFiles](~~DescribeSuspEventQuaraFiles~~) to obtain this value from the Id field in the response. This parameter is required. If this parameter is not specified, the API returns HTTP 400 with error code -101.
   * 
   * Before you call this operation, make sure that the Security Center agent is installed on the ECS instance, and that file-related security events and corresponding quarantined files exist. After a file is quarantined, call DescribeSuspEventQuaraFiles to query the quarantined file ID, and then call this operation to restore the file.
   * 
   * @example
   * 3921797
   */
  quaraFileId?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member account in the resource directory.
   * >You can call [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) to obtain this parameter.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.168.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      quaraFileId: 'QuaraFileId',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      quaraFileId: 'number',
      resourceDirectoryAccountId: 'number',
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

