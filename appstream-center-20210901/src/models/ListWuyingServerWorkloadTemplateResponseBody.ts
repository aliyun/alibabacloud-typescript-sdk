// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWuyingServerWorkloadTemplateResponseBodyWorkloadTemplates extends $dara.Model {
  /**
   * @remarks
   * The rendered template content. The original text is Base64-encoded after being UTF-8 encoded. You must perform Base64 decoding before use.
   * 
   * @example
   * IyB3b3JrbG9hZCB0ZW1wbGF0ZQo=
   */
  content?: string;
  /**
   * @remarks
   * The description of the workload template.
   * 
   * @example
   * Used to submit general-purpose computing workloads
   */
  description?: string;
  /**
   * @remarks
   * The name of the workload template.
   * 
   * @example
   * General-purpose computing task template
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWuyingServerWorkloadTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The compatibility field. The current version does not use this field to indicate the number of returned entries.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The compatibility field. The current version does not generate a next page token.
   * 
   * @example
   * unused
   */
  nextToken?: string;
  /**
   * @remarks
   * The unique identifier of the request. You can use this ID to troubleshoot request issues.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of workload templates. The templates are returned in the configuration order, with a maximum of 100 entries.
   */
  workloadTemplates?: ListWuyingServerWorkloadTemplateResponseBodyWorkloadTemplates[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      workloadTemplates: 'WorkloadTemplates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      workloadTemplates: { 'type': 'array', 'itemType': ListWuyingServerWorkloadTemplateResponseBodyWorkloadTemplates },
    };
  }

  validate() {
    if(Array.isArray(this.workloadTemplates)) {
      $dara.Model.validateArray(this.workloadTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

