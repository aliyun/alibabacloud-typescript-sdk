// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSimilarSecurityEventsQueryTaskRequest extends $dara.Model {
  resourceOwnerId?: number;
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
   * The code of the alerting event that has the same type or rule hits.
   * 
   * @example
   * default
   */
  similarEventScenarioCode?: string;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 1.2.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      securityEventId: 'SecurityEventId',
      similarEventScenarioCode: 'SimilarEventScenarioCode',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      securityEventId: 'number',
      similarEventScenarioCode: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

