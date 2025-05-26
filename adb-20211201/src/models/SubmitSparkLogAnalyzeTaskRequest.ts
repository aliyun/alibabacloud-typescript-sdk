// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSparkLogAnalyzeTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Spark application.
   * 
   * This parameter is required.
   * 
   * @example
   * s202301121553hzd9c6f7xxxx
   */
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

