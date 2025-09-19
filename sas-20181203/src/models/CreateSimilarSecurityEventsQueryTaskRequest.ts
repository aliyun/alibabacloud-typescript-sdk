// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSimilarSecurityEventsQueryTaskRequest extends $dara.Model {
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the alert event.
   * 
   * >  You must specify at least one of the SecurityEventId and SimilarEventScenarioCode parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * 14323
   */
  securityEventId?: number;
  /**
   * @remarks
   * The codes of alert events that are triggered by the same rule or of the same alert type.
   * 
   * >  You must specify at least one of the SecurityEventId and SimilarEventScenarioCode parameters.
   * 
   * @example
   * default
   */
  similarEventScenarioCode?: string;
  /**
   * @remarks
   * The source IP address of the request.
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

