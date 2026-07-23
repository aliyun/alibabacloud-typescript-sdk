// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFeatureConsistencyCheckJobRequest extends $dara.Model {
  /**
   * @remarks
   * The environment where the job runs. Valid values:
   * 
   * - Daily: the daily environment
   * 
   * - Pre: the pre-production environment
   * 
   * - Prod: the production environment
   * 
   * This parameter is required.
   * 
   * @example
   * Pre
   */
  environment?: string;
  /**
   * @remarks
   * The feature consistency check job configuration ID. You can call the [ListFeatureConsistencyCheckJobConfigs](https://help.aliyun.com/document_detail/2557567.html) operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  featureConsistencyCheckJobConfigId?: string;
  /**
   * @remarks
   * The instance ID. You can obtain the instance ID on the [Instances](https://help.aliyun.com/document_detail/2411819.html) page.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-********
   */
  instanceId?: string;
  /**
   * @remarks
   * The sampling duration, in minutes.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  samplingDuration?: number;
  static names(): { [key: string]: string } {
    return {
      environment: 'Environment',
      featureConsistencyCheckJobConfigId: 'FeatureConsistencyCheckJobConfigId',
      instanceId: 'InstanceId',
      samplingDuration: 'SamplingDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
      featureConsistencyCheckJobConfigId: 'string',
      instanceId: 'string',
      samplingDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

