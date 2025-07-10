// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLogoTaskRequest extends $dara.Model {
  logoVersion?: string;
  negativePrompt?: string;
  /**
   * @example
   * {\\"ehpcutilParam\\":\\"sched job_submit --commandline \\\\\\"/ehpcdata/data/usersTest/huangqiaoyi-1725933699384/huangqiaoyi-1725933699384.slurm\\\\\\" --runasuser TestGfjnSimworks\\"}
   */
  parameters?: string;
  prompt?: string;
  static names(): { [key: string]: string } {
    return {
      logoVersion: 'LogoVersion',
      negativePrompt: 'NegativePrompt',
      parameters: 'Parameters',
      prompt: 'Prompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logoVersion: 'string',
      negativePrompt: 'string',
      parameters: 'string',
      prompt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

