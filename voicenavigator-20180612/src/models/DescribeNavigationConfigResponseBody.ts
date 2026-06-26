// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DescribeNavigationConfigResponseBodyGreetingConfig extends $dara.Model {
  /**
   * @remarks
   * The greeting message.
   * 
   * @example
   * 您好，欢迎致电智能导航
   */
  greetingWords?: string;
  /**
   * @remarks
   * The intent trigger.
   * 
   * @example
   * 你好
   */
  intentTrigger?: string;
  /**
   * @remarks
   * The source of the configuration.
   * 
   * @example
   * chatbotIntent
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      greetingWords: 'GreetingWords',
      intentTrigger: 'IntentTrigger',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      greetingWords: 'string',
      intentTrigger: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNavigationConfigResponseBodySilenceTimeoutConfig extends $dara.Model {
  /**
   * @remarks
   * The action to perform after the final silence prompt is played. Valid values: `TransferToAgent`, `TransferToIVR`, `RedirectToPage`, or `HangUp`.
   * 
   * @example
   * HangUp
   */
  finalAction?: string;
  /**
   * @remarks
   * Parameters for the final action, such as a redirection target.
   * 
   * @example
   * {}
   */
  finalActionParams?: string;
  /**
   * @remarks
   * The prompt that is played when the silence timeout threshold is reached.
   * 
   * @example
   * 抱歉，听不到您说话，请您稍后致电
   */
  finalPrompt?: string;
  /**
   * @remarks
   * ""
   * 
   * @example
   * ""
   */
  intentTrigger?: string;
  /**
   * @remarks
   * The prompt that is played when a silence timeout occurs.
   * 
   * @example
   * 抱歉，我没听到您说话
   */
  prompt?: string;
  /**
   * @remarks
   * The source of the configuration.
   * 
   * @example
   * chatbotIntent
   */
  sourceType?: string;
  /**
   * @remarks
   * The maximum number of silence timeouts.
   * 
   * @example
   * 3
   */
  threshold?: number;
  /**
   * @remarks
   * The duration of the silence timeout.
   * 
   * @example
   * 10
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      finalAction: 'FinalAction',
      finalActionParams: 'FinalActionParams',
      finalPrompt: 'FinalPrompt',
      intentTrigger: 'IntentTrigger',
      prompt: 'Prompt',
      sourceType: 'SourceType',
      threshold: 'Threshold',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finalAction: 'string',
      finalActionParams: 'string',
      finalPrompt: 'string',
      intentTrigger: 'string',
      prompt: 'string',
      sourceType: 'string',
      threshold: 'number',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNavigationConfigResponseBodyUnrecognizingConfig extends $dara.Model {
  /**
   * @remarks
   * The action to take when the number of unrecognized inputs reaches the threshold. Valid values: `TransferToAgent`, `TransferToIVR`, `RedirectToPage`, or `HangUp`.
   * 
   * @example
   * TransferToAgent
   */
  finalAction?: string;
  /**
   * @remarks
   * Parameters for the final action, such as a redirection target.
   * 
   * @example
   * { \\"skillGroupId\\": \\"fallbackSkillGroup\\" }
   */
  finalActionParams?: string;
  /**
   * @remarks
   * The prompt that is played when the unrecognized input threshold is reached.
   * 
   * @example
   * 抱歉，我暂时无法处理您的问题，即将为您转接人工
   */
  finalPrompt?: string;
  /**
   * @remarks
   * The prompt that is played when user input is not recognized.
   * 
   * @example
   * 抱歉，我无法理解您的意思
   */
  prompt?: string;
  /**
   * @remarks
   * The maximum number of times the user\\"s input is not recognized.
   * 
   * @example
   * 3
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      finalAction: 'FinalAction',
      finalActionParams: 'FinalActionParams',
      finalPrompt: 'FinalPrompt',
      prompt: 'Prompt',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finalAction: 'string',
      finalActionParams: 'string',
      finalPrompt: 'string',
      prompt: 'string',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNavigationConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The greeting configuration.
   */
  greetingConfig?: DescribeNavigationConfigResponseBodyGreetingConfig;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 14C39896-AE6D-4643-9C9A-E0566B2C2DDD
   */
  requestId?: string;
  /**
   * @remarks
   * The silence timeout configuration.
   */
  silenceTimeoutConfig?: DescribeNavigationConfigResponseBodySilenceTimeoutConfig;
  /**
   * @remarks
   * The configuration for handling unrecognized input.
   */
  unrecognizingConfig?: DescribeNavigationConfigResponseBodyUnrecognizingConfig;
  static names(): { [key: string]: string } {
    return {
      greetingConfig: 'GreetingConfig',
      requestId: 'RequestId',
      silenceTimeoutConfig: 'SilenceTimeoutConfig',
      unrecognizingConfig: 'UnrecognizingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      greetingConfig: DescribeNavigationConfigResponseBodyGreetingConfig,
      requestId: 'string',
      silenceTimeoutConfig: DescribeNavigationConfigResponseBodySilenceTimeoutConfig,
      unrecognizingConfig: DescribeNavigationConfigResponseBodyUnrecognizingConfig,
    };
  }

  validate() {
    if(this.greetingConfig && typeof (this.greetingConfig as any).validate === 'function') {
      (this.greetingConfig as any).validate();
    }
    if(this.silenceTimeoutConfig && typeof (this.silenceTimeoutConfig as any).validate === 'function') {
      (this.silenceTimeoutConfig as any).validate();
    }
    if(this.unrecognizingConfig && typeof (this.unrecognizingConfig as any).validate === 'function') {
      (this.unrecognizingConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

