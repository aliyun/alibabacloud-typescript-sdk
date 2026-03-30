// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewVoiceResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * https://cab-config-pre.oss-cn-hangzhou.aliyuncs.com/TTSDEMO/05B9FBF3-3681-10FF-9C24-340A93F3A25F.wav?Expires=1774795253&OSSAccessKeyId=STS.NYGg2ejEjYqySx3EsuRutagbd&Signature=L7oa%2F7s%2FeVwBxpkn3SvKfr8uXB0%3D&security-token=CAISzwJ1q6Ft5B2yfSjIr5ryLIjRh5pL7rOSUV6CoXMgXvpYjqLJhjz2IHhMfnlvB%2BgYsfU2m2xR5%2FYclrp6SJtIXleCZtF94oxN9h2gb4fb42Jqag%2B%2F08%2FLI3OaLjKm9u2wCryLYbGwU%2FOpbE%2B%2B5U0X6LDmdDKkckW4OJmS8%2FBOZcgWWQ%2FKBlgvRq0hRG1YpdQdKGHaONu0LxfumRCwNkdzvRdmgm4NgsbWgO%2Fks0GG3ASmlrFF%2B9mufMb5M%2FMBZskvD42Hu8VtbbfE3SJq7BxHybx7lqQs%2B02c5onHUwYPu0vZYrOLroQ%2BfFFjHKMzEetPq%2F7ylPI9ofDamIXxxAarin3kufQeLmrJ4LwneIvBXr5RHd5wa2rbWAEsmLNBEhL2EJMKtT476hcbIAuUI3bC5F%2BkxOHp9i6ErImtRWbLssUUla4R5TGOWbLJWzkTH93xuRqAAapuIRuRt0d2Odr1hsaYukMd42UkNapdTrehzmXeR6lyv1jlLmkAHve9Cbl9N5bO3A96FSlEfjHksQBWG0CEXRm3jLW41bpR00dgnM6gpOj7lRW2z33L0dTtaRw79X3%2BUqz3gv9md5QvoaVi1jnr%2FcFRNxbjl7DI39pdcGlTI2lqIAA%3D
   */
  data?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Instance af81a389-91f0-4157-8d82-720edd02b66a
   *  does not exist.
   */
  message?: string;
  params?: string[];
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

