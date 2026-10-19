// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAifgAnalysisRequest extends $dara.Model {
  /**
   * @remarks
   * The channel type.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  channel?: string;
  /**
   * @remarks
   * The additional information.
   * 
   * This parameter is required.
   * 
   * @example
   * {"train_taskid": "train-92abd24", "duration": "10"}
   */
  params?: string;
  /**
   * @remarks
   * The region information.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The service name.
   * 
   * This parameter is required.
   * 
   * @example
   * slowNode
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'channel',
      params: 'params',
      region: 'region',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      params: 'string',
      region: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

