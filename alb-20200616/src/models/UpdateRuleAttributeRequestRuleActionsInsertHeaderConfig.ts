// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRuleAttributeRequestRuleActionsInsertHeaderConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to overwrite the request header values. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  coverEnabled?: boolean;
  /**
   * @remarks
   * The key of the header. The key must be 1 to 40 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The header keys specified by **InsertHeaderConfig** must be unique.
   * 
   * >  You cannot specify the following header keys: `slb-id`, `slb-ip`, `x-forwarded-for`, `x-forwarded-proto`, `x-forwarded-eip`, `x-forwarded-port`, `x-forwarded-client-srcport`, `x-forwarded-host`, `connection`, `upgrade`, `content-length`, `transfer-encoding`, `keep-alive`, `te`, `host`, `cookie`, `remoteip`, and `authority`. The header keys are case-insensitive.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The value of the header.
   * 
   * *   If **ValueType** is set to **SystemDefined**, you can set the Value parameter to one of the following values:
   * 
   *     *   **ClientSrcPort**: the client port.
   *     *   **ClientSrcIp**: the IP address of the client.
   *     *   **Protocol**: the request protocol (HTTP or HTTPS).
   *     *   **SLBId**: the ID of the ALB instance.
   *     *   **SLBPort**: the listener port of the ALB instance.
   * 
   * *   If **ValueType** is set to **UserDefined**, a custom header value is supported. The header value must be 1 to 128 characters in length, and can contain printable characters whose ASCII values are `greater than or equal to 32 and lower than 127`. You can use asterisks (\\*) and question marks (?) as wildcard characters. Quotation marks (`"`) are not supported. The header value cannot start or end with a space character, or end with a backslash (`\\`).
   * 
   * *   If **ValueType** is set to **ReferenceHeader**, you can reference a value from request headers. The value must be 1 to 128 characters in length, and can contain lowercase letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * UserDefined
   */
  value?: string;
  /**
   * @remarks
   * The type of the header. Valid values:
   * 
   * *   **UserDefined**: a custom header.
   * *   **ReferenceHeader**: a header that references one of the request headers.
   * *   **SystemDefined**: a system-defined header value.
   * 
   * @example
   * UserDefined
   */
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      coverEnabled: 'CoverEnabled',
      key: 'Key',
      value: 'Value',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverEnabled: 'boolean',
      key: 'string',
      value: 'string',
      valueType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

