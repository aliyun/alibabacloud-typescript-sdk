// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobResponseBodyJobInfoTasksTaskSpecTaskExecutorVM extends $dara.Model {
  /**
   * @example
   * m-xxxx
   */
  image?: string;
  /**
   * @example
   * ZWNobyAiMTIzNCIgPiBgZGF0ZSArJXNg
   */
  prologScript?: string;
  /**
   * @example
   * ZWNobyAiMTIzNCIgPiBgZGF0ZSArJXNg
   */
  script?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      prologScript: 'PrologScript',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

