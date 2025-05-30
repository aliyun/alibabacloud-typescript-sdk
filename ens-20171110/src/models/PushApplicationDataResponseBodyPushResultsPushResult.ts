// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushApplicationDataResponseBodyPushResultsPushResult extends $dara.Model {
  /**
   * @remarks
   * The name of the data file.
   * 
   * @example
   * gcs-pre-websocket-eip-telecom
   */
  name?: string;
  /**
   * @remarks
   * The push result. The value is of the enumeration type. Valid values:
   * 
   * *   0: The push operation is successful.
   * *   100: The push operation has been performed and the file is pushed.
   * *   200: The push operation has been performed and the file is being pushed to specific file servers.
   * *   300: The push operation failed. You must trigger the push operation again. The ResultDescrip parameter indicates the error description.
   * 
   * @example
   * 100
   */
  resultCode?: number;
  /**
   * @remarks
   * The description of the push status.
   * 
   * @example
   * success
   */
  resultDescrip?: string;
  /**
   * @remarks
   * The version number of the data file.
   * 
   * @example
   * standard
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      resultCode: 'ResultCode',
      resultDescrip: 'ResultDescrip',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      resultCode: 'number',
      resultDescrip: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

