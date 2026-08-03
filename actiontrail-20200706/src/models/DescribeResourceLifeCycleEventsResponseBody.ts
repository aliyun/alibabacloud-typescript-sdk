// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceLifeCycleEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The lifecycle events.<br>This field is returned as a JSON-serialized string. The string contains the hierarchical data for lifecycle event categories. Use a standard JSON deserialization tool for your programming language to parse the string into an array of objects.
   * 
   * @example
   * [{"children":[{"children":[{"label":"Create Events","labelEn":"Create Events","value":"Create,CreateInstance,RunInstances"},{"label":"Delete Events","labelEn":"Delete Events","value":"DeleteInstance,DeleteInstances,Release"}],"label":"ECS Instance","labelEn":"ECS Instance","value":"ACS::ECS::Instance"}],"label":"Elastic Compute Service","labelEn":"Elastic Compute Service","value":"Ecs"}]
   */
  data?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B10969CF-C743-55F8-9710-F0711504****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

