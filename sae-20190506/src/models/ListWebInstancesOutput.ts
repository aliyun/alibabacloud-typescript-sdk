// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WebInstanceInfo } from "./WebInstanceInfo";
import { WebVersionStatus } from "./WebVersionStatus";


export class ListWebInstancesOutput extends $dara.Model {
  /**
   * @remarks
   * The error message of instance creation. If the instance creation was successful, this parameter is not returned.
   */
  currentError?: string;
  /**
   * @remarks
   * The application instance.
   */
  webInstances?: WebInstanceInfo[];
  /**
   * @remarks
   * The instance status.
   */
  webVersionStatus?: { [key: string]: WebVersionStatus };
  static names(): { [key: string]: string } {
    return {
      currentError: 'CurrentError',
      webInstances: 'WebInstances',
      webVersionStatus: 'WebVersionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentError: 'string',
      webInstances: { 'type': 'array', 'itemType': WebInstanceInfo },
      webVersionStatus: { 'type': 'map', 'keyType': 'string', 'valueType': WebVersionStatus },
    };
  }

  validate() {
    if(Array.isArray(this.webInstances)) {
      $dara.Model.validateArray(this.webInstances);
    }
    if(this.webVersionStatus) {
      $dara.Model.validateMap(this.webVersionStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

