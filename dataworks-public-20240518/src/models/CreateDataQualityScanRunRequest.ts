// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityScanRunRequestParameters extends $dara.Model {
  /**
   * @example
   * regiondt
   */
  name?: string;
  /**
   * @example
   * cn-shanghai$[yyyy-mm-dd-1]
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
  cu?: number;
  id?: string;
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
  dataQualityScanId?: number;
  parameters?: CreateDataQualityScanRunRequestParameters[];
  projectId?: number;
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

