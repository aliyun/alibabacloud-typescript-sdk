// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobRequestTasksTaskSpecTaskExecutorContainerEnvironmentVars extends $dara.Model {
  /**
   * @example
   * PATH
   */
  name?: string;
  /**
   * @example
   * /usr/local/bin
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
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

