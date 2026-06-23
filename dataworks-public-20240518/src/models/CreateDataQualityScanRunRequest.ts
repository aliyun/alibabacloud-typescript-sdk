// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityScanRunRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter. The only supported value is:
   * 
   * - triggerTime
   * 
   * No other scheduling parameters are currently supported.
   * 
   * @example
   * triggerTime
   */
  name?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * - If the parameter name is triggerTime, this value must be the trigger time as a timestamp.
   * 
   * @example
   * 1775812636
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataQualityScanRunRequestRuntimeResource extends $dara.Model {
  /**
   * @remarks
   * The number of compute units (CUs) to reserve from the resource group for the data quality scan.
   * 
   * @example
   * 0.25
   */
  cu?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * e9455a13-ff00-4965-833c-337546ba4854
   */
  id?: string;
  /**
   * @remarks
   * The image configuration for running the data quality scan on the resource group.
   * 
   * @example
   * i-xxxxxx
   */
  image?: string;
  static names(): { [key: string]: string } {
    return {
      cu: 'Cu',
      id: 'Id',
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
      id: 'string',
      image: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataQualityScanRunRequest extends $dara.Model {
  /**
   * @remarks
   * The data quality scan ID.
   * 
   * @example
   * 20000001
   */
  dataQualityScanId?: number;
  /**
   * @remarks
   * The parameters for the run. The `triggerTime` parameter is required.
   */
  parameters?: CreateDataQualityScanRunRequestParameters[];
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * Specifies the scheduling resource group used to run the data quality scan. This object uses the same data structure as the scheduling API.
   */
  runtimeResource?: CreateDataQualityScanRunRequestRuntimeResource;
  static names(): { [key: string]: string } {
    return {
      dataQualityScanId: 'DataQualityScanId',
      parameters: 'Parameters',
      projectId: 'ProjectId',
      runtimeResource: 'RuntimeResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityScanId: 'number',
      parameters: { 'type': 'array', 'itemType': CreateDataQualityScanRunRequestParameters },
      projectId: 'number',
      runtimeResource: CreateDataQualityScanRunRequestRuntimeResource,
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(this.runtimeResource && typeof (this.runtimeResource as any).validate === 'function') {
      (this.runtimeResource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

