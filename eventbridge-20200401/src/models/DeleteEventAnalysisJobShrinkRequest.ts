// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEventAnalysisJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The identifier of the source resource.
   * 
   * This parameter is required.
   * 
   * @example
   * {"Kafka":{"RegionId":"cn-hangzhou","InstanceId":"alikafka_post-cn-xxx","Topic":"my_topic"}}
   */
  sourceResourceShrink?: string;
  static names(): { [key: string]: string } {
    return {
      sourceResourceShrink: 'SourceResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceResourceShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

