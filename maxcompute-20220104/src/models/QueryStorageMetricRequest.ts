// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryStorageMetricRequest extends $dara.Model {
  projectList?: string[];
  typeList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1735536322
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1735534322
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      projectList: 'projectList',
      typeList: 'typeList',
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectList: { 'type': 'array', 'itemType': 'string' },
      typeList: { 'type': 'array', 'itemType': 'string' },
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.projectList)) {
      $dara.Model.validateArray(this.projectList);
    }
    if(Array.isArray(this.typeList)) {
      $dara.Model.validateArray(this.typeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

