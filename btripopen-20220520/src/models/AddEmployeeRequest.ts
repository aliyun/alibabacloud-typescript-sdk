// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddEmployeeRequestBaseLocationList extends $dara.Model {
  /**
   * @remarks
   * The 6-digit administrative division code.
   */
  code?: string;
  /**
   * @remarks
   * The administrative division level: province or city.
   */
  level?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      level: 'level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      level: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEmployeeRequestCertList extends $dara.Model {
  /**
   * @remarks
   * The birthday of the employee.
   * - Format: yy-MM-dd.
   * 
   * @example
   * 2000-01-01
   */
  birthday?: string;
  /**
   * @remarks
   * The expiration date of the certificate.
   * - Format: `yy-MM-dd`.
   * 
   * @example
   * 2050-01-01
   */
  certExpiredTime?: string;
  /**
   * @remarks
   * The two-letter country/region code (Country Code) of the certificate issuing country/region.
   * 
   * @example
   * CN
   */
  certNation?: string;
  /**
   * @remarks
   * The certificate number.
   * 
   * @example
   * 110101********1234
   */
  certNo?: string;
  /**
   * @remarks
   * The certificate type.
   * 
   * @example
   * 0
   */
  certType?: number;
  /**
   * @remarks
   * The gender of the employee, which must be consistent with the certificate information.
   * 
   * @example
   * F
   */
  gender?: string;
  /**
   * @remarks
   * The two-letter country/region code (Country Code) of the employee.
   * 
   * @example
   * CN
   */
  nationality?: string;
  /**
   * @remarks
   * The mobile phone number of the employee.
   * 
   * @example
   * 131****8888
   */
  phone?: string;
  /**
   * @remarks
   * The name of the employee, which must be consistent with the certificate information.
   * 
   * @example
   * 张三
   */
  realName?: string;
  /**
   * @remarks
   * The English name of the employee. Follow these format requirements:
   * - Separate the last name and first name with "/", for example: LastName/FirstName.
   * - Do not include spaces between the last name and first name.
   * 
   * @example
   * John/Wilson
   */
  realNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      certExpiredTime: 'cert_expired_time',
      certNation: 'cert_nation',
      certNo: 'cert_no',
      certType: 'cert_type',
      gender: 'gender',
      nationality: 'nationality',
      phone: 'phone',
      realName: 'real_name',
      realNameEn: 'real_name_en',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      certExpiredTime: 'string',
      certNation: 'string',
      certNo: 'string',
      certType: 'number',
      gender: 'string',
      nationality: 'string',
      phone: 'string',
      realName: 'string',
      realNameEn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEmployeeRequest extends $dara.Model {
  /**
   * @remarks
   * The account email address. This parameter can be specified when the enterprise activation method is email activation.
   * 
   * @example
   * j*********@example.com
   */
  accountEmail?: string;
  /**
   * @remarks
   * The account phone number. For enterprises with international phone numbers enabled, specify international numbers, Hong Kong (China), Macao (China), and Taiwan (China) numbers in the format +xx-xxxxxx.
   * 
   * @example
   * +86-18812345678
   */
  accountPhone?: string;
  /**
   * @remarks
   * The custom extension field for the employee, which supports key-value pairs.
   * 
   * - Format: JSON string.
   * 
   * @example
   * {
   *     "sio": "123",
   *     "location": "22222",
   *     "isForeigner": "Y"
   * }
   */
  attribute?: string;
  /**
   * @remarks
   * The avatar of the employee. Specify the URL of the image.
   * 
   * @example
   * https://example.com/example.jpg
   */
  avatar?: string;
  /**
   * @remarks
   * The 6-digit administrative code of the work location.
   * - A maximum of two different administrative codes can be specified.
   */
  baseCityCodeList?: string[];
  /**
   * @remarks
   * The base location information of the employee.
   */
  baseLocationList?: AddEmployeeRequestBaseLocationList[];
  /**
   * @remarks
   * The birthday of the employee.
   * - Format: yy-MM-dd.
   * 
   * @example
   * 2000-01-01
   */
  birthday?: string;
  /**
   * @remarks
   * The certificate information of the employee.
   */
  certList?: AddEmployeeRequestCertList[];
  /**
   * @remarks
   * The collection of role IDs associated with the employee. The number of roles associated with a single employee must be less than or equal to 200. Otherwise, the employee synchronization fails.
   */
  customRoleCodeList?: string[];
  /**
   * @remarks
   * The email address of the employee.
   * 
   * @example
   * j*********@example.com
   */
  email?: string;
  /**
   * @remarks
   * The gender of the employee.
   * 
   * @example
   * F
   */
  gender?: string;
  /**
   * @remarks
   * Specifies whether the employee is an Alibaba Business Travel enterprise administrator.
   * 
   * @example
   * false
   */
  isAdmin?: boolean;
  /**
   * @remarks
   * Specifies whether the employee is the boss.
   * 
   * @example
   * false
   */
  isBoss?: boolean;
  /**
   * @remarks
   * Specifies whether the employee is a department manager.
   * 
   * @example
   * false
   */
  isDeptLeader?: boolean;
  /**
   * @remarks
   * The employee number, which serves as a unique identifier for the employee along with `user_id`. Ensure that the value is unique.
   * 
   * @example
   * job_1234
   */
  jobNo?: string;
  /**
   * @remarks
   * The ID of the direct manager of the employee.
   * 
   * @example
   * user_001
   */
  managerUserId?: string;
  /**
   * @remarks
   * The list of departments to which the employee belongs.
   */
  outDeptIdList?: string[];
  /**
   * @remarks
   * The mobile phone number of the employee.
   * - This field is commonly used for booking business travel services across various categories. **In this case, it is required.**
   * - If your enterprise is a government agency or other special enterprise, call 400-800-5890 to contact an Alibaba Business Travel customer service representative.
   * 
   * @example
   * 131****8888
   */
  phone?: string;
  /**
   * @remarks
   * The position level of the employee, which is commonly used to match different travel standards.
   * 
   * @example
   * 高级
   */
  positionLevel?: string;
  /**
   * @remarks
   * The name of the employee.
   * 
   * @example
   * 张三
   */
  realName?: string;
  /**
   * @remarks
   * The English name of the employee. Follow these format requirements:
   * - Separate the last name and first name with "/", for example: LastName/FirstName.
   * - Do not include spaces between the last name and first name.
   * 
   * @example
   * John/Wilson
   */
  realNameEn?: string;
  /**
   * @remarks
   * The unique identifier of the same employee across multiple enterprises (parent and subsidiary enterprises).
   * 
   * @example
   * union_0123
   */
  unionId?: string;
  /**
   * @remarks
   * The employee ID, which is the unique identifier of the employee within the enterprise. Ensure that this value is unique.
   * 
   * This parameter is required.
   * 
   * @example
   * user_1234
   */
  userId?: string;
  /**
   * @remarks
   * The nickname of the employee.
   * 
   * This parameter is required.
   * 
   * @example
   * 弓长
   */
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      accountEmail: 'account_email',
      accountPhone: 'account_phone',
      attribute: 'attribute',
      avatar: 'avatar',
      baseCityCodeList: 'base_city_code_list',
      baseLocationList: 'base_location_list',
      birthday: 'birthday',
      certList: 'cert_list',
      customRoleCodeList: 'custom_role_code_list',
      email: 'email',
      gender: 'gender',
      isAdmin: 'is_admin',
      isBoss: 'is_boss',
      isDeptLeader: 'is_dept_leader',
      jobNo: 'job_no',
      managerUserId: 'manager_user_id',
      outDeptIdList: 'out_dept_id_list',
      phone: 'phone',
      positionLevel: 'position_level',
      realName: 'real_name',
      realNameEn: 'real_name_en',
      unionId: 'union_id',
      userId: 'user_id',
      userNick: 'user_nick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountEmail: 'string',
      accountPhone: 'string',
      attribute: 'string',
      avatar: 'string',
      baseCityCodeList: { 'type': 'array', 'itemType': 'string' },
      baseLocationList: { 'type': 'array', 'itemType': AddEmployeeRequestBaseLocationList },
      birthday: 'string',
      certList: { 'type': 'array', 'itemType': AddEmployeeRequestCertList },
      customRoleCodeList: { 'type': 'array', 'itemType': 'string' },
      email: 'string',
      gender: 'string',
      isAdmin: 'boolean',
      isBoss: 'boolean',
      isDeptLeader: 'boolean',
      jobNo: 'string',
      managerUserId: 'string',
      outDeptIdList: { 'type': 'array', 'itemType': 'string' },
      phone: 'string',
      positionLevel: 'string',
      realName: 'string',
      realNameEn: 'string',
      unionId: 'string',
      userId: 'string',
      userNick: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.baseCityCodeList)) {
      $dara.Model.validateArray(this.baseCityCodeList);
    }
    if(Array.isArray(this.baseLocationList)) {
      $dara.Model.validateArray(this.baseLocationList);
    }
    if(Array.isArray(this.certList)) {
      $dara.Model.validateArray(this.certList);
    }
    if(Array.isArray(this.customRoleCodeList)) {
      $dara.Model.validateArray(this.customRoleCodeList);
    }
    if(Array.isArray(this.outDeptIdList)) {
      $dara.Model.validateArray(this.outDeptIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

