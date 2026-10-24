// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSimilarSecurityEventsQueryTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert event.
   * 
   * This parameter is required.
   * 
   * @example
   * 14323
   */
  securityEventId?: number;
  /**
   * @remarks
   * The scenario code of alerting events that are of the same type or have the same rule hits.
   * 
   * @example
   * default
   */
  similarEventScenarioCode?: string;
  static names(): { [key: string]: string } {
    return {
      securityEventId: 'SecurityEventId',
      similarEventScenarioCode: 'SimilarEventScenarioCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityEventId: 'number',
      similarEventScenarioCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

