// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureMigrationJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter because this parameter will be removed in the future.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
  /**
   * @remarks
   * The start offset of incremental data migration. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 40E35BD9-002E-4D63-9BE5-FBA48833****
   */
  requestId?: string;
  /**
   * @remarks
   * The SID of the Oracle database.
   * 
   * >  You must specify this parameter only if the **DestinationEndpoint.EngineName** parameter is set to **Oracle** and the **Oracle** database is deployed in a non-RAC architecture.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

