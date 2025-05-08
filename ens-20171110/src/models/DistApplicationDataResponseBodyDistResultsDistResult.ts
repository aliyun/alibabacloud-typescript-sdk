// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DistApplicationDataResponseBodyDistResultsDistResult extends $dara.Model {
  /**
   * @remarks
   * The name of the data file.
   * 
   * @example
   * gcs-prod-websocket-eip-unicom
   */
  name?: string;
  /**
   * @remarks
   * The error code. The value is of the enumerated data type.
   * 
   * @example
   * 400
   */
  resultCode?: number;
  /**
   * @remarks
   * The description of the distribution result.
   * 
   * @example
   * Success
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

