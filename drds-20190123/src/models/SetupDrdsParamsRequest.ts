// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetupDrdsParamsRequestData extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter that you want to configure for a database.
   * 
   * @example
   * test_db
   */
  dbName?: string;
  /**
   * @remarks
   * The valid values of the parameter.
   * 
   * @example
   * [true|false]
   */
  paramRanges?: string;
  /**
   * @remarks
   * The type of the parameter that you want to configure. Valid values:
   * 
   * *   **ATOM**: the configuration item in the layer-3 data source.
   * *   **CONFIG**: the configuration item in ConfigServer.
   * *   **DIAMOND**: the configuration item in Diamond.
   * 
   * @example
   * ATOM
   */
  paramType?: string;
  /**
   * @remarks
   * The value of parameter that you want to configure.
   * 
   * @example
   * true
   */
  paramValue?: string;
  /**
   * @remarks
   * The name of the parameter that you want to configure.
   * 
   * @example
   * FORBID_EXECUTE_DML_ALL
   */
  paramVariableName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      paramRanges: 'ParamRanges',
      paramType: 'ParamType',
      paramValue: 'ParamValue',
      paramVariableName: 'ParamVariableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      paramRanges: 'string',
      paramType: 'string',
      paramValue: 'string',
      paramVariableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetupDrdsParamsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  data?: SetupDrdsParamsRequestData[];
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance for which you want to configure parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * drdsjiii1b49****
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The resource for which you want to configure parameters. Valid values:
   * 
   * *   **INSTANCE**: Configure parameters for the instance.
   * *   **DB**: Configure parameters for the databases of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * DB
   */
  paramLevel?: string;
  /**
   * @remarks
   * The ID of the region in which the PolarDB-X 1.0 instance is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      drdsInstanceId: 'DrdsInstanceId',
      paramLevel: 'ParamLevel',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': SetupDrdsParamsRequestData },
      drdsInstanceId: 'string',
      paramLevel: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

