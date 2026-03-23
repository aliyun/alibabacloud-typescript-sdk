// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDbProxyInstanceSslRequest extends $dara.Model {
  DBProxyEngineType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dbInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBProxyEngineType: 'DBProxyEngineType',
      dbInstanceId: 'DbInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBProxyEngineType: 'string',
      dbInstanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

