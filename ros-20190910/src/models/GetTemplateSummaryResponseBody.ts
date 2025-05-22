// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTemplateSummaryResponseBodyResourceIdentifierSummaries } from "./GetTemplateSummaryResponseBodyResourceIdentifierSummaries";


export class GetTemplateSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the stack template.
   * 
   * @example
   * No description
   */
  description?: string;
  /**
   * @remarks
   * The metadata that is defined in the template.
   * 
   * @example
   * {"key": "value"}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The declarations of the parameters in the template.
   */
  parameters?: { [key: string]: any }[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6
   */
  requestId?: string;
  /**
   * @remarks
   * The resource identifier summaries.\\
   * A summary describes the resource that you want to import and the properties that are used to identify the resource during the import. For example, VpcId is an identifier property of ALIYUN::ECS::VPC.
   */
  resourceIdentifierSummaries?: GetTemplateSummaryResponseBodyResourceIdentifierSummaries[];
  /**
   * @remarks
   * All resource types that are used in the template.
   */
  resourceTypes?: string[];
  /**
   * @remarks
   * The version of the template.
   * 
   * @example
   * 2015-09-01
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      metadata: 'Metadata',
      parameters: 'Parameters',
      requestId: 'RequestId',
      resourceIdentifierSummaries: 'ResourceIdentifierSummaries',
      resourceTypes: 'ResourceTypes',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parameters: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
      resourceIdentifierSummaries: { 'type': 'array', 'itemType': GetTemplateSummaryResponseBodyResourceIdentifierSummaries },
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
      version: 'string',
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(Array.isArray(this.resourceIdentifierSummaries)) {
      $dara.Model.validateArray(this.resourceIdentifierSummaries);
    }
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

