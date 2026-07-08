// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlowsResponseBodyFlowsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. The tag key can be up to 64 characters in length.
   * 
   * @example
   * tuoluo
   */
  key?: string;
  /**
   * @remarks
   * The tag values.
   * 
   * @example
   * {\\"connectorId\\": \\"connector-5e43ef26b53e4a158529\\", \\"authConfig\\": \\"{\\\\\\"apiKey\\\\\\": \\\\\\"sk-77e7c7ed775f4fd388d505d37b2b1b33\\\\\\"}\\"}
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowsResponseBodyFlows extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the connector flow is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The connector flow description.
   * 
   * @example
   * 在未认证的公众号中更实用Qwen3开源版本自动回复
   */
  flowDesc?: string;
  /**
   * @remarks
   * The connector flow ID.
   * 
   * @example
   * flow-xxxxxxxx
   */
  flowId?: string;
  /**
   * @remarks
   * The connector flow name.
   * 
   * @example
   * 钉钉群聊 - 流式调用百炼应用-小助手
   */
  flowName?: string;
  /**
   * @remarks
   * The connector flow template content.
   * 
   * @example
   * {}
   */
  flowTemplate?: string;
  /**
   * @remarks
   * The connector flow version.
   * 
   * @example
   * 1
   */
  flowVersion?: string;
  /**
   * @remarks
   * The connector flow version status.
   * 
   * @example
   * 0 - 草稿
   * 1- 发布
   * 2- 下线
   */
  flowVersionStatus?: string;
  /**
   * @remarks
   * The time when the connector flow was created.
   * 
   * @example
   * 2025-12-30T02:29:51Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the connector flow was last modified.
   * 
   * @example
   * 2025-12-30T02:29:48Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The released version number.
   * 
   * @example
   * 1
   */
  releasedVersion?: number;
  /**
   * @remarks
   * The tag values.
   */
  tags?: ListFlowsResponseBodyFlowsTags[];
  /**
   * @remarks
   * The webhook URL.
   * 
   * @example
   * https://{uid}.appflow.aliyunnest.com/webhook/xxxxxx
   */
  webhookUrl?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      flowDesc: 'FlowDesc',
      flowId: 'FlowId',
      flowName: 'FlowName',
      flowTemplate: 'FlowTemplate',
      flowVersion: 'FlowVersion',
      flowVersionStatus: 'FlowVersionStatus',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      releasedVersion: 'ReleasedVersion',
      tags: 'Tags',
      webhookUrl: 'WebhookUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      flowDesc: 'string',
      flowId: 'string',
      flowName: 'string',
      flowTemplate: 'string',
      flowVersion: 'string',
      flowVersionStatus: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      releasedVersion: 'number',
      tags: { 'type': 'array', 'itemType': ListFlowsResponseBodyFlowsTags },
      webhookUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of connector flows.
   */
  flows?: ListFlowsResponseBodyFlows[];
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * AAAAAVY3rYiv9VoUJQSiCitgjgRCGYBJsWLezzDdq2+aDNB4j8bgHiGAwZWnCMJPepC+WYZ4J1BLMwE7gJm++1ku/AI=
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 02FB9782-5390-5DF9-A1DA-9F2DE2FA1E3D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      flows: 'Flows',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flows: { 'type': 'array', 'itemType': ListFlowsResponseBodyFlows },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.flows)) {
      $dara.Model.validateArray(this.flows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

