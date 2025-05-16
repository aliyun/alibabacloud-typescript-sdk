// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClustersResponseBodyClustersAddonsResourcesSpec extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp1bg85d2q6laic8****
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The Elastic IP Address (EIP) ID.
   * 
   * @example
   * eip-bp1vi9124tbx1g3kr****
   */
  eipInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsInstanceId: 'EcsInstanceId',
      eipInstanceId: 'EipInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsInstanceId: 'string',
      eipInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

