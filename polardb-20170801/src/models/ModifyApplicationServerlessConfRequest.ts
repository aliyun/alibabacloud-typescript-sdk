// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApplicationServerlessConfRequestServerlessConfList extends $dara.Model {
  /**
   * @remarks
   * The type of the application sub-component.
   * 
   * For Supabase, valid values are:
   * 
   * - gateway
   * 
   * - backend
   * 
   * @example
   * gateway
   */
  componentType?: string;
  /**
   * @remarks
   * The maximum number of PCUs for a single node. Valid values: 0 to 16.
   * 
   * @example
   * 16
   */
  scaleMax?: string;
  /**
   * @remarks
   * The minimum number of PolarDB Capacity Units (PCUs) for a single node. Valid values: 0 to 16.
   * 
   * @example
   * 1
   */
  scaleMin?: string;
  static names(): { [key: string]: string } {
    return {
      componentType: 'ComponentType',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentType: 'string',
      scaleMax: 'string',
      scaleMin: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyApplicationServerlessConfRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The list of Serverless configurations.
   * 
   * This parameter is required.
   */
  serverlessConfList?: ModifyApplicationServerlessConfRequestServerlessConfList[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      serverlessConfList: 'ServerlessConfList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      serverlessConfList: { 'type': 'array', 'itemType': ModifyApplicationServerlessConfRequestServerlessConfList },
    };
  }

  validate() {
    if(Array.isArray(this.serverlessConfList)) {
      $dara.Model.validateArray(this.serverlessConfList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

