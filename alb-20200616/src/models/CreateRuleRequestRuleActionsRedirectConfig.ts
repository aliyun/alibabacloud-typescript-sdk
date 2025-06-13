// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRuleRequestRuleActionsRedirectConfig extends $dara.Model {
  /**
   * @remarks
   * The hostname to which requests are forwarded. Valid values:
   * 
   * *   **${host}** (default): If you set the value to ${host}, you cannot append other characters.
   * 
   * *   If you want to specify a custom value, make sure that the following requirements are met:
   * 
   *     *   The hostname must be 3 to 128 characters in length, and can contain lowercase letters, digits, and the following characters: - . \\* = ~ _ + \\ ^ ! $ & | ( ) [ ] ?.
   *     *   The hostname must contain at least one period (.) but cannot start or end with a period (.).
   *     *   The rightmost domain label can contain only letters and wildcard characters, and cannot contain digits or hyphens (-). The leftmost `domain label` can be an asterisk (\\*).
   *     *   The domain labels cannot start or end with hyphens (-).
   *     *   You can use asterisks (\\*) and question marks (?) anywhere in a domain label as wildcard characters.
   * 
   * @example
   * ${host}
   */
  host?: string;
  /**
   * @remarks
   * The HTTP status code that indicates the redirect type. Valid values: **301**, **302**, **303**, **307**, and **308**.
   * 
   * @example
   * 301
   */
  httpCode?: string;
  /**
   * @remarks
   * The URL to which requests are redirected. Valid values:
   * 
   * *   Default value: **${path}**. **${host}**, **${protocol}**, and **${port}** are also supported. Each variable can be specified only once. You can specify one or more of the preceding variables in each request. You can also combine them with a custom value.
   * 
   * *   If you want to specify a custom value, make sure that the following requirements are met:
   * 
   *     *   The URL must be 1 to 128 characters in length, and is case-sensitive. You can use asterisks (\\*) and question marks (?) as wildcard characters.
   *     *   The URL must start with a forward slash (/) and can contain letters, digits, and the following special characters: `$ - _ . + / & ~ @ : \\" * ?`. It cannot contain the following special characters: `% # ; ! ( ) [ ] ^ , \\ "`. You can use asterisks (\\*) and question marks (?) as wildcard characters.
   * 
   * @example
   * /test
   */
  path?: string;
  /**
   * @remarks
   * The port to which requests are distributed.
   * 
   * *   **${port}** (default): If you set the value to ${port}, you cannot append other characters to the value.
   * *   You can also enter a port number. Valid values: **1 to 63335**.
   * 
   * @example
   * 10
   */
  port?: string;
  /**
   * @remarks
   * The redirect protocol. Valid values:
   * 
   * *   **${protocol}** (default): If you set the value to ${protocol}, you cannot modify the value or append other characters.
   * *   **HTTP**
   * *   **HTTPS**
   * 
   * > 
   * 
   * *   HTTPS listeners support only HTTPS redirection.
   * 
   * *   HTTP listeners support HTTP and HTTPS redirection.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The query string to which requests are redirected.
   * 
   * *   Default value: **${query}**. **${host}**, **${protocol}**, and **${port}** are also supported. Each variable can be specified only once. You can specify one or more of the preceding variables in each request. You can also combine them with a custom value.
   * 
   * *   If you want to specify a custom value, make sure that the following requirements are met:
   * 
   *     *   The query string must be 1 to 128 characters in length.
   *     *   It can contain printable characters, excluding space characters, the special characters `# [ ] { } \\ | < > "`, and lowercase letters.
   * 
   * @example
   * ${query}
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

