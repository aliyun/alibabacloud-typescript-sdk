// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLogoTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The logo generation version number. Different versions use different parameter parsing methods.
   */
  logoVersion?: string;
  /**
   * @remarks
   * The negative prompt.
   * 
   * @example
   * Do not generate politically related image content
   */
  negativePrompt?: string;
  /**
   * @remarks
   * The task parameters.
   * 
   * @example
   * {\\"ehpcutilParam\\":\\"sched job_submit --commandline \\\\\\"/ehpcdata/data/usersTest/huangqiaoyi-1725933699384/huangqiaoyi-1725933699384.slurm\\\\\\" --runasuser TestGfjnSimworks\\"}
   */
  parameters?: string;
  /**
   * @remarks
   * The positive prompt.
   * 
   * @example
   * Strictly follow the original text to extract the summary of the manuscript. Do not arbitrarily fabricate or modify the news data presented in the text. Do not change the meaning or the news facts of the original text. Do not add your own opinions to the summary. Ensure the generated summary is free of grammatical and punctuation errors. When generating the summary, remove information such as the reporter, correspondent, and article source
   */
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

