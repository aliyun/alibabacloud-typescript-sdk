// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DescribeNavigationConfigResponseBodyGreetingConfig extends $dara.Model {
  greetingWords?: string;
  intentTrigger?: string;
  /**
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
   * @example
   * HangUp
   */
  finalAction?: string;
  /**
   * @example
   * {}
   */
  finalActionParams?: string;
  finalPrompt?: string;
  /**
   * @remarks
   * ""
   * 
   * @example
   * ""
   */
  intentTrigger?: string;
  prompt?: string;
  /**
   * @example
   * chatbotIntent
   */
  sourceType?: string;
  /**
   * @example
   * 3
   */
  threshold?: number;
  /**
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
   * @example
   * TransferToAgent
   */
  finalAction?: string;
  /**
   * @example
   * { \\"skillGroupId\\": \\"fallbackSkillGroup\\" }
   */
  finalActionParams?: string;
  finalPrompt?: string;
  prompt?: string;
  /**
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
  greetingConfig?: DescribeNavigationConfigResponseBodyGreetingConfig;
  /**
   * @example
   * 14C39896-AE6D-4643-9C9A-E0566B2C2DDD
   */
  requestId?: string;
  silenceTimeoutConfig?: DescribeNavigationConfigResponseBodySilenceTimeoutConfig;
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

