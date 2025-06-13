// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRulesResponseBodyRulesRuleActionsRedirectConfig extends $dara.Model {
  /**
   * @remarks
   * The hostname to which requests are redirected. Valid values:
   * 
   * *   **${host}** (default): If ${host} is returned, no other characters are appended.
   * 
   * *   A custom value. Make sure that the custom value meets the following requirements:
   * 
   *     *   The hostname must be 3 to 128 characters in length, and can contain lowercase letters, digits, hyphens (-), periods (.), asterisks (\\*), and question marks (?).
   *     *   The hostname must contain at least one period (.) but cannot start or end with a period (.).
   *     *   The rightmost domain label can contain only letters and wildcard characters. It cannot contain digits or hyphens (-).
   *     *   The domain labels cannot start or end with a hyphen (-).
   *     *   You can use asterisks (\\*) and question marks (?) anywhere in a domain label as wildcard characters.
   * 
   * @example
   * www.example.com
   */
  host?: string;
  /**
   * @remarks
   * The forwarding method. Valid values: **301**, **302**, **303**, **307**, and **308**.
   * 
   * @example
   * 301
   */
  httpCode?: string;
  /**
   * @remarks
   * The URL to which requests are redirected. Valid values:
   * 
   * *   **${path}** (default): You can reference \\*\\*${host}**, **${protocol}**, and**${port}**. The URL can consist of **${host}**,**${protocol}**, and **${port}\\*\\*. Each variable can be used only once. The preceding variables can be used at the same time or combined with a custom value.
   * 
   * *   A custom value. Make sure that the custom value meets the following requirements:
   * 
   *     *   The URL must be 1 to 128 characters in length.
   *     *   It must start with a forward slash (/) and can contain letters, digits, and the following special characters: `$ - _ .+ / & ~ @ :`. It cannot contain the following special characters: `" % # ; ! ( ) [ ] ^ , "`. You can use asterisks (\\*) and question marks (?) as wildcard characters.
   * 
   * @example
   * /test
   */
  path?: string;
  /**
   * @remarks
   * The port to which requests are redirected. Valid values:
   * 
   * *   **${port}** (default): If ${port} is returned, no other characters are appended.
   * *   Other valid values: **1 to 63335**.
   * 
   * @example
   * 10
   */
  port?: string;
  /**
   * @remarks
   * The redirect protocol. Valid values:
   * 
   * *   **${protocol}** (default): If ${protocol} is returned, no other characters are appended.
   * *   **HTTP** or **HTTPS**
   * 
   * >  HTTPS listeners supports only HTTPS redirects.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The query string of the URL to which requests are redirected. The query string must be 1 to 128 characters in length, and can contain printable characters, excluding uppercase letters and the following special characters: `# [ ] { } \\ | < > &`.
   * 
   * @example
   * quert
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      httpCode: 'HttpCode',
      path: 'Path',
      port: 'Port',
      protocol: 'Protocol',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      httpCode: 'string',
      path: 'string',
      port: 'string',
      protocol: 'string',
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

