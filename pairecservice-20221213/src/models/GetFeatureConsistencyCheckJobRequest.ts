// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFeatureConsistencyCheckJobRequest extends $dara.Model {
  /**
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

