// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobRequestTasksTaskSpecTaskExecutorVM extends $dara.Model {
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * m-xxxx
   */
  image?: string;
  /**
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  prologScript?: string;
  /**
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  script?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      image: 'Image',
      prologScript: 'PrologScript',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      image: 'string',
      prologScript: 'string',
      script: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

