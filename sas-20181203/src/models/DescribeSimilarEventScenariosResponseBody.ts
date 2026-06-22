// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSimilarEventScenariosResponseBodyScenarios extends $dara.Model {
  /**
   * @remarks
   * The code of the handling scenario. Valid values:
   * - **default**: same alerting type
   * - **same_file_content**: same file content rule
   * - **same_ip**: same IP rule
   * - **same_url**: same URL rule.
   * 
   * @example
   * same_url
   */
  code?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSimilarEventScenariosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. The ID is a unique identifier that Alibaba Cloud generates for the request and can be used to troubleshoot issues.
   * 
   * @example
   * FDF7B8D9-8493-4B90-8D13-E0C1FFCE5F97
   */
  requestId?: string;
  /**
   * @remarks
   * The list of handling scenarios for alerts of the same type.
   */
  scenarios?: DescribeSimilarEventScenariosResponseBodyScenarios[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scenarios: 'Scenarios',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scenarios: { 'type': 'array', 'itemType': DescribeSimilarEventScenariosResponseBodyScenarios },
    };
  }

  validate() {
    if(Array.isArray(this.scenarios)) {
      $dara.Model.validateArray(this.scenarios);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

