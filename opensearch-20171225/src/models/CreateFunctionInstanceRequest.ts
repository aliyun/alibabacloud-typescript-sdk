// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFunctionInstanceRequestCreateParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * title_field
   */
  name?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * title
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
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

export class CreateFunctionInstanceRequestUsageParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * allow_dict_id
   */
  name?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * 123
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
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

export class CreateFunctionInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters used to create the instance.
   * 
   * @example
   * [   { "name": "param1", "value": "val1"   } ]
   */
  createParameters?: CreateFunctionInstanceRequestCreateParameters[];
  /**
   * @remarks
   * The CRON expression used to schedule periodic training, in the format of Minutes Hours DayofMonth Month DayofWeek. The default value is empty, which specifies that no periodic training is performed. A value of 0 for DayofWeek specifies Sunday.
   * 
   * @example
   * 0 0 ? * 0,1,2,3,4,5,6
   */
  cron?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test instance
   */
  description?: string;
  /**
   * @remarks
   * The feature type.
   * 
   * *   Default value: PAAS. Training is required before you can use the feature.
   * 
   * @example
   * PAAS
   */
  functionType?: string;
  /**
   * @remarks
   * The instance name. The name must be 1 to 30 characters in length and can contain letters, digits, and underscores (_). The name is case-sensitive and must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * ctr_test
   */
  instanceName?: string;
  /**
   * @remarks
   * The model type. The value varies based on the model.
   * 
   * *   Click-through rate (CTR) model: tf_checkpoint
   * *   Popularity model: pop
   * *   Category model: offline_inference
   * *   Hotword model: offline_inference
   * *   Hint model: offline_inference
   * *   Hotword model for real-time top searches: near_realtime
   * *   Personalized hint model: near_realtime
   * *   Drop-down suggestion model: offline_inference
   * *   Tokenization model: text
   * *   Term weight model: tf_checkpoint
   * *   Synonym model: offline_inference
   * 
   * This parameter is required.
   * 
   * @example
   * tf_checkpoint
   */
  modelType?: string;
  /**
   * @remarks
   * The parameters used to use the instance.
   */
  usageParameters?: CreateFunctionInstanceRequestUsageParameters[];
  static names(): { [key: string]: string } {
    return {
      createParameters: 'createParameters',
      cron: 'cron',
      description: 'description',
      functionType: 'functionType',
      instanceName: 'instanceName',
      modelType: 'modelType',
      usageParameters: 'usageParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createParameters: { 'type': 'array', 'itemType': CreateFunctionInstanceRequestCreateParameters },
      cron: 'string',
      description: 'string',
      functionType: 'string',
      instanceName: 'string',
      modelType: 'string',
      usageParameters: { 'type': 'array', 'itemType': CreateFunctionInstanceRequestUsageParameters },
    };
  }

  validate() {
    if(Array.isArray(this.createParameters)) {
      $dara.Model.validateArray(this.createParameters);
    }
    if(Array.isArray(this.usageParameters)) {
      $dara.Model.validateArray(this.usageParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

