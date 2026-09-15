// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSimilarSecurityEventsQueryTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Different requests should use different tokens. The token supports only ASCII characters and cannot exceed 64 characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run of the request. Valid values:
   * 
   * - true: performs only a dry run without executing the actual operation.
   * - false: performs the actual operation.
   * 
   * Default value: false.
   */
  dryRun?: boolean;
  resourceDirectoryAccountId?: number;
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
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      resourceOwnerId: 'ResourceOwnerId',
      securityEventId: 'SecurityEventId',
      similarEventScenarioCode: 'SimilarEventScenarioCode',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      resourceDirectoryAccountId: 'number',
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

