// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DescribeNavigationConfigResponseBodyGreetingConfig extends $dara.Model {
  /**
   * @remarks
   * The greeting words.
   * 
   * @example
   * Hello, welcome to the intelligent navigation service
   */
  greetingWords?: string;
  /**
   * @remarks
   * The trigger intent.
   * 
   * @example
   * Hello
   */
  intentTrigger?: string;
  /**
   * @remarks
   * The configuration type.
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
   * The action to perform after the prompt. Valid values: TransferToAgent, TransferToIVR, RedirectToPage, and HangUp.
   * 
   * @example
   * HangUp
   */
  finalAction?: string;
  /**
   * @remarks
   * The action parameters, such as the redirect target.
   * 
   * @example
   * {}
   */
  finalActionParams?: string;
  /**
   * @remarks
   * The final silence prompt.
   * 
   * @example
   * Sorry, I cannot hear you. Please call back later
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
   * The silence timeout prompt.
   * 
   * @example
   * Sorry, I did not hear you
   */
  prompt?: string;
  /**
   * @remarks
   * The source type of the configuration.
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
   * The silence timeout period.
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
   * The action to perform for unrecognized input. Valid values: TransferToAgent, TransferToIVR, RedirectToPage, and HangUp.
   * 
   * @example
   * TransferToAgent
   */
  finalAction?: string;
  /**
   * @remarks
   * The action parameters, such as the redirect target.
   * 
   * @example
   * { \\"skillGroupId\\": \\"fallbackSkillGroup\\" }
   */
  finalActionParams?: string;
  /**
   * @remarks
   * The final prompt for unrecognized input.
   * 
   * @example
   * Sorry, I cannot process your request at the moment. I am transferring you to a human agent
   */
  finalPrompt?: string;
  /**
   * @remarks
   * The prompt for unrecognized input.
   * 
   * @example
   * Sorry, I do not understand what you mean
   */
  prompt?: string;
  /**
   * @remarks
   * The maximum number of unrecognized inputs.
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
   * The unrecognizing configuration.
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

