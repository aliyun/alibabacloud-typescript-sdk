// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ServiceInstanceLatestDeployment extends $dara.Model {
  finishedTime?: string;
  name?: string;
  /**
   * @example
   * Running
   */
  phase?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      finishedTime: 'finishedTime',
      name: 'name',
      phase: 'phase',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishedTime: 'string',
      name: 'string',
      phase: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

