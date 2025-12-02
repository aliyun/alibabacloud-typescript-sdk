// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateScanResultFeedbackRequest extends $dara.Model {
  /**
   * @remarks
   * Feedback
   * 
   * @example
   * missOut
   */
  feedback?: string;
  /**
   * @remarks
   * Labels.
   * 
   * @example
   * abuse
   */
  labels?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 46232656-984E-****-A648-B1D0667B6C3E
   */
  queryRequestId?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Resource Type
   * 
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @remarks
   * Risk Level
   * 
   * @example
   * high
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      feedback: 'Feedback',
      labels: 'Labels',
      queryRequestId: 'QueryRequestId',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feedback: 'string',
      labels: 'string',
      queryRequestId: 'string',
      regionId: 'string',
      resourceType: 'string',
      riskLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

