// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApplicationServerlessConfRequestServerlessConfList extends $dara.Model {
  /**
   * @example
   * gateway
   */
  componentType?: string;
  /**
   * @example
   * 16
   */
  scaleMax?: string;
  /**
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
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
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

