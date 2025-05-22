// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDiagnosticResponseBodyDiagnosticResult extends $dara.Model {
  /**
   * @remarks
   * The resources that failed to be diagnosed.
   */
  failedResources?: { [key: string]: any };
  /**
   * @remarks
   * The information about Resource Orchestration Service (ROS) calling.
   */
  rosActionMessages?: { [key: string]: any };
  /**
   * @remarks
   * The stack information.
   */
  stackMessages?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      failedResources: 'FailedResources',
      rosActionMessages: 'RosActionMessages',
      stackMessages: 'StackMessages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResources: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      rosActionMessages: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      stackMessages: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.failedResources) {
      $dara.Model.validateMap(this.failedResources);
    }
    if(this.rosActionMessages) {
      $dara.Model.validateMap(this.rosActionMessages);
    }
    if(this.stackMessages) {
      $dara.Model.validateMap(this.stackMessages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

