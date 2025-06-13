// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRuleAttributeRequestRuleActionsRewriteConfig extends $dara.Model {
  /**
   * @remarks
   * The hostname to which requests are rewritten. Valid values:
   * 
   * *   **${host}** (default): If you set the value to ${host}, you cannot append other characters.
   * 
   * *   If you want to specify a custom value, make sure that the following requirements are met:
   * 
   *     *   The hostname must be 3 to 128 characters in length, and can contain lowercase letters, digits, hyphens (-), periods (.), asterisks (\\*), and question marks (?).
   *     *   The hostname contains at least one period (.) but does not start or end with a period (.).
   *     *   The rightmost domain label can contain only letters and wildcard characters. It cannot contain digits or hyphens (-).
   *     *   The domain labels do not start or end with a hyphen (-). You can use asterisks (\\*) and question marks (?) anywhere in a domain label as wildcard characters.
   * 
   * @example
   * www.example.com
   */
  host?: string;
  /**
   * @remarks
   * The URL to which requests are redirected. Valid values:
   * 
   * *   Default value: **${path}**. \\*\\*${host}**, **${protocol}**, and **${port}\\*\\* are also supported. Each variable can be specified only once. The preceding variables can be used at the same time or combined with a custom value.
   * 
   * *   If you want to specify a custom value, make sure that the following requirements are met:
   * 
   *     *   The header value must be 1 to 128 characters in length.
   *     *   It must start with a forward slash (/) and can contain letters, digits, and the following special characters: `$ - _ . + / & ~ @ :`. It does not contain the following special characters: `% # ; ! ( ) [ ] ^ , \\ "`. You can use asterisks (\\*) and question marks (?) as wildcard characters.
   * 
   * @example
   * /tsdf
   */
  path?: string;
  /**
   * @remarks
   * The query string to which requests are redirected. Valid values:
   * 
   * *   Default value: **${query}**. \\*\\*${host}**, **${protocol}**, and **${port}\\*\\* are also supported. Each variable can be specified only once. The preceding variables can be used at the same time or combined with a custom value.
   * 
   * *   If you want to specify a custom value, make sure that the following requirements are met:
   * 
   *     *   The header value must be 1 to 128 characters in length.
   *     *   It can contain printable characters, excluding space characters, the special characters `# [ ] { } \\ | < > "`, and uppercase letters.
   * 
   * @example
   * quedsa
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      path: 'Path',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      path: 'string',
      query: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

