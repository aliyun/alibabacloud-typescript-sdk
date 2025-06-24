// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLogoTaskRequest extends $dara.Model {
  negativePrompt?: string;
  /**
   * @example
   * {\\"ehpcutilParam\\":\\"sched job_submit --commandline \\\\\\"/ehpcdata/data/usersTest/huangqiaoyi-1725933699384/huangqiaoyi-1725933699384.slurm\\\\\\" --runasuser TestGfjnSimworks\\"}
   */
  parameters?: string;
  prompt?: string;
  /**
   * @example
   * 1.0.2
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      negativePrompt: 'NegativePrompt',
      parameters: 'Parameters',
      prompt: 'Prompt',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      negativePrompt: 'string',
      parameters: 'string',
      prompt: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

