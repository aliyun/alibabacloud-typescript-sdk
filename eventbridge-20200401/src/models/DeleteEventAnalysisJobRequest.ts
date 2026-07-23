// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEventAnalysisJobRequestSourceResourceKafka extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Kafka instance.
   * 
   * @example
   * alikafka_post-cn-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The region of the Kafka instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the Kafka topic.
   * 
   * @example
   * my_topic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventAnalysisJobRequestSourceResourceRocketMQ extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the RocketMQ instance.
   * 
   * @example
   * rmq-cn-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the RocketMQ instance.
   * 
   * @example
   * Cloud_5
   */
  instanceType?: string;
  /**
   * @remarks
   * The region of the RocketMQ instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the RocketMQ topic.
   * 
   * @example
   * my_topic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
      regionId: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventAnalysisJobRequestSourceResource extends $dara.Model {
  /**
   * @remarks
   * The Kafka data source.
   */
  kafka?: DeleteEventAnalysisJobRequestSourceResourceKafka;
  /**
   * @remarks
   * The RocketMQ data source.
   */
  rocketMQ?: DeleteEventAnalysisJobRequestSourceResourceRocketMQ;
  static names(): { [key: string]: string } {
    return {
      kafka: 'Kafka',
      rocketMQ: 'RocketMQ',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kafka: DeleteEventAnalysisJobRequestSourceResourceKafka,
      rocketMQ: DeleteEventAnalysisJobRequestSourceResourceRocketMQ,
    };
  }

  validate() {
    if(this.kafka && typeof (this.kafka as any).validate === 'function') {
      (this.kafka as any).validate();
    }
    if(this.rocketMQ && typeof (this.rocketMQ as any).validate === 'function') {
      (this.rocketMQ as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventAnalysisJobRequest extends $dara.Model {
  /**
   * @remarks
   * The identifier of the source resource.
   * 
   * This parameter is required.
   * 
   * @example
   * {"Kafka":{"RegionId":"cn-hangzhou","InstanceId":"alikafka_post-cn-xxx","Topic":"my_topic"}}
   */
  sourceResource?: DeleteEventAnalysisJobRequestSourceResource;
  static names(): { [key: string]: string } {
    return {
      sourceResource: 'SourceResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceResource: DeleteEventAnalysisJobRequestSourceResource,
    };
  }

  validate() {
    if(this.sourceResource && typeof (this.sourceResource as any).validate === 'function') {
      (this.sourceResource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

