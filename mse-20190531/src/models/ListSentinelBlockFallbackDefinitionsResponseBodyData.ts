// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSentinelBlockFallbackDefinitionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * spring-cloud-a
   */
  appName?: string;
  /**
   * @remarks
   * Behavior  detail.
   * 
   * @example
   * {"webRespStatusCode":429,"webRespMessage":"test","webFallbackMode":0,"webRespContentType":0}
   */
  fallbackBehavior?: { [key: string]: any };
  /**
   * @remarks
   * Behavior Id
   * 
   * @example
   * 12
   */
  id?: string;
  /**
   * @remarks
   * The name of the behavior.
   * 
   * @example
   * defaultFallback
   */
  name?: string;
  /**
   * @remarks
   * The name of the Microservices namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * Behavior classification.
   * 
   * @example
   * 1
   */
  resourceClassification?: string;
  /**
   * @remarks
   * Resource information bound to the behavior.
   * 
   * @example
   * {"/params/{hot}":[1]}
   */
  targetMap?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      fallbackBehavior: 'FallbackBehavior',
      id: 'Id',
      name: 'Name',
      namespace: 'Namespace',
      resourceClassification: 'ResourceClassification',
      targetMap: 'TargetMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      fallbackBehavior: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'string',
      name: 'string',
      namespace: 'string',
      resourceClassification: 'string',
      targetMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.fallbackBehavior) {
      $dara.Model.validateMap(this.fallbackBehavior);
    }
    if(this.targetMap) {
      $dara.Model.validateMap(this.targetMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

